import { ConfigurableModuleBuilder } from '@nestjs/common';
import { StripeOptions } from './interface/stripe-options.interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  ASYNC_OPTIONS_TYPE,
  OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<StripeOptions>()
  .setClassMethodName('forRoot')
  .build();
