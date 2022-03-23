
import { AggregateRoot, IEvent } from '@nestjs/cqrs';
import { User } from '@prisma/client/users';
import { UserEventType } from '../kafka-commands';
import { PartialIdentifiableEntity } from '../partial-entity';


export class UserAggregate extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly verified: boolean,
    public readonly verification: string,
    public readonly isActive: boolean,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly isBanned: boolean,
    public readonly banDuration: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {
    super();
  }
  create() {
    this.apply(new UserCreatedEvent(this));
  }

  update() {
    this.apply(new UserUpdatedEvent(this));
  }

  activate() {
    this.apply(new UserActivatedEvent(this));
  }

  deactivate() {
    this.apply(new UserDeactivatedEvent(this));
  }

  ban() {
    this.apply(new UserBannedEvent(this));
  }

  unban() {
    this.apply(new UserUnBannedEvent(this));
  }

  verify() {
    this.apply(new UserVerifiedEvent(this));
  }
}


abstract class UserEvent {
  constructor(public readonly user: UserAggregate) {}
}

export class UserCreatedEvent extends UserEvent {
  constructor(public readonly user: UserAggregate) {
    super(user);
  }
}


export class UserActivatedEvent extends UserEvent {
  type: UserEventType = "USER_ACTIVATED";
  constructor(public readonly user: UserAggregate) {
    super(user)
  }
}

export class UserUpdatedEvent extends UserEvent {
  constructor(public readonly user: UserAggregate) {
    super(user);
  }
}


export class UserDeactivatedEvent extends UserEvent {
  constructor(public readonly user: UserAggregate) {
    super(user);
  }
}


export type UserBannedEventMessage = Pick<UserAggregate, 'id' | 'email'>;
export class UserBannedEvent extends UserEvent {
  constructor(public readonly user: UserAggregate) {
    super(user);
  }
}
;
export class UserVerifiedEvent extends UserEvent {
  type: UserEventType = "USER_VERIFIED";
  constructor(public readonly user: UserAggregate) {
    super(user);
  }
}


export class UserUnBannedEvent extends UserEvent {
  constructor(public readonly user: UserAggregate) {
    super(user);
  }
}



