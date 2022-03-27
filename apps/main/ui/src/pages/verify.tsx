import themeGet from '@styled-system/theme-get';
import { useStore } from '@super-rad-poc/common/hooks';
import { LoadingSpinner } from '@super-rad-poc/design/components';
import { Title } from '@super-rad-poc/design/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MascotHello from '../images/mascot/mascot_happy_1.png';

const StyledVerify = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${themeGet('colors.primary_text')};
  color: ${themeGet('colors.light_text')};
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const VerificationPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setError('No token provided');
      return;
    }
    const verify = async () => {
      try {
        await axios.post('http://localhost:5002/verify/', { token });
        setLoading(false);

        setTimeout(() => {
          navigate('/login');
        }, 5000);
      } catch (err: any) {
        setError(err);
      }
    };

    verify();
  }, [token]);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {error ? (
            <div>
              <h1>Error</h1>
              <p>{error}</p>
            </div>
          ) : (
            <StyledVerify>
              <Title color="#fafafa">Verification Successful!</Title>
              <p color="#fafafa">
                In order to keep everyone safe, we require that you verify your
                email before you can log in.
              </p>
              <StyledTextContent>
                <p color="#fafafa">
                  Please check your email for a verification link.
                </p>
                <p>
                  You will be automatically redirected to the login page in a
                  couple seconds.{' '}
                </p>
                <p>
                  {' '}
                  Otherwise, you can also <Link to="/login">click here</Link>
                </p>
              </StyledTextContent>
              <div>
                <img
                  src={MascotHello}
                  style={{ width: '10rem' }}
                  alt="Sad Mascot"
                />
              </div>
            </StyledVerify>
          )}
        </div>
      )}
    </div>
  );
};
