import { Provider } from "@nestjs/common";
import { GqlThrottlerGuard } from "../throttler-guard";

export const THROTTLE_GUARD = 'THROTTLE_GUARD';

export const RateLimitingProvider: Provider = {
  provide: THROTTLE_GUARD,
  useClass: GqlThrottlerGuard
};
