import { DynamicModule, Module } from '@nestjs/common';

import { createStripeProvider } from './providers/createStriveProviders';
import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  OPTIONS_TYPE,
} from './stripe.module-definition';

@Module({
  providers: [],
})
export class StripeModule extends ConfigurableModuleClass {
  static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
    return {
      providers: [createStripeProvider(options)],
      ...super.forRoot(options),
    };
  }
  static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    return {
      providers: [createStripeProvider(options)],
      ...super.forRootAsync(options),
    };
  }
}
