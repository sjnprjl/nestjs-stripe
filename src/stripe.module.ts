import { DynamicModule, Module } from '@nestjs/common';

import { createStripeProvider } from './providers/createStripeProviders';
import {
  ASYNC_OPTIONS_TYPE,
  ConfigurableModuleClass,
  OPTIONS_TYPE,
} from './stripe.module-definition';

@Module({})
export class StripeModule extends ConfigurableModuleClass {
  static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
    const { providers, ...rest } = super.forRoot(options);
    const provider = createStripeProvider(options);
    return {
      providers: [provider, ...providers],
      exports: [provider],
      ...rest,
    };
  }
  static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    const { providers, ...rest } = super.forRootAsync(options);
    const provider = createStripeProvider(options);
    return {
      providers: [provider, ...providers],
      exports: [provider],
      ...rest,
    };
  }
}
