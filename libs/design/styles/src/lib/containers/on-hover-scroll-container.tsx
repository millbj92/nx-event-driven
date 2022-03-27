import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  ElementRef,
} from 'react';
import styled from 'styled-components';

const SCROLL_BOX_MIN_HEIGHT = 20;

export const StyledScrollhost = styled.div`
  ::webkit-scrollbar {
    display: none;
  }

  overflow: auto;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
`;

export const StyledScrollBar = styled.div`
  width: 100%;
  height: 100%;
  right: 0;
  top: 9px;
  position: absolute;
  border-radius: 7px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const StyledScrollBarThumb = styled.div`
  width: 8px;
  height: 20px;
  margin-left: 1px;
  position: absolute;
  border-radius: 7px;
  opacity: 1;
  top: 0;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const StyledScrollhostContainer = styled.div`
  position: relative;
  height: 100%;
`;

export function OnHoverScrollContainer({
  children,
  className,
  ...restProps
}: any) {
  const [hovering, setHovering] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true);
  }, [hovering]);

  const handleMouseOut = useCallback(() => {
    !!hovering && setHovering(false);
  }, [hovering]);

  const handleDocumentMouseUp = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
    },
    [isDragging]
  );

  const handleDocumentMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        const scrollHostElement = scrollHostRef.current;
        const { scrollHeight, offsetHeight } = scrollHostElement as any;

        let deltaY = e.clientY - lastScrollThumbPosition;
        let percentage = deltaY * (scrollHeight / offsetHeight);

        setScrollThumbPosition(e.clientY);
        setScrollBoxTop(
          Math.min(
            Math.max(0, scrollBoxTop + deltaY),
            offsetHeight - scrollBoxHeight
          )
        );
        scrollHostElement!.scrollTop = Math.min(
          scrollHostElement!.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
  );

  const handleScrollThumbMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientY);
    setDragging(true);
    console.log('handleScrollThumbMouseDown');
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement = scrollHostRef.current;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement as any;

    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
    // newTop = newTop + parseInt(scrollTop, 10);
    newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, []);

  const scrollHostRef = useRef<Element>();

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement!;
    const scrollThumbPercentage = clientHeight / scrollHeight;
    const scrollThumbHeight = Math.max(
      scrollThumbPercentage * clientHeight,
      SCROLL_BOX_MIN_HEIGHT
    );
    setScrollBoxHeight(scrollThumbHeight);
    scrollHostElement!.addEventListener('scroll', handleScroll, true);
    return function cleanup() {
      scrollHostElement!.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  useEffect(() => {
    //this is handle the dragging on scroll-thumb
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mouseleave', handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mouseleave', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

  return (
    <StyledScrollhostContainer
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <StyledScrollhost ref={scrollHostRef} {...restProps}>
        {children}
      </StyledScrollhost>
      <StyledScrollBar style={{ opacity: hovering ? 1 : 0 }}>
        <StyledScrollBarThumb
          style={{ height: scrollBoxHeight, top: scrollBoxTop }}
          onMouseDown={handleScrollThumbMouseDown}
        />
      </StyledScrollBar>
    </StyledScrollhostContainer>
  );
}
