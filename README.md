

<center><b>nestjs-stripe</b></center>

# About

`@sjnprjl/nestjs-stripe` package / module is same as [nestjs-stripe](https://github.com/dhaspden/nestjs-stripe) created by [dhaspden](https://github.com/dhaspden). A great guy BTW I also tried to create the same, taking inspiration from him, ofc. The only difference, however, is that this `fork`(you can say) supports recent version of [nestjs](https://github.com/nestjs/nest).

# Installation

```sh
npm install @sjnprjl/nestjs-stripe
```

# Example

```ts
// app.module.ts
import { Module } from '@nestjs/common';
import { StripeModule } from '@sjnprjl/nestjs-stripe';
@Module({
  imports: [
      // ...
    StripeModule.forRoot({
      apiKey:
        'your-secret-key',
      apiVersion: '2022-08-01',
    }),
      // ...
  ],
// ...
})
export class AppModule {}
```

Now you can inject the stripe client into your `services` .

```ts
// app.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { STRIPE_TOKEN } from '@sjnprjl/nestjs-stripe'; // provider token
import Stripe from 'stripe';

@Injectable()
export class AppService {
  constructor(@Inject(STRIPE_TOKEN) private stripeClient: Stripe) {}
}

```

# Contributing

I am just too lazy to fill this `README` with full of wonderful informations.  I therefore, request **you** to fill this markdown for me please 🥲.

