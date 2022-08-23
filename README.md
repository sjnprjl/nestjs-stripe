<center><b>nestjs-stripe</b></center>

# Installation

```sh
npm install @sjnprjl/nestjs-stripe
```

Install `stripe`.

```sh
npm install stripe
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
      apiKey: 'your-secret-key',
      options: {
        apiVersion: '2022-08-01',
      },
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

I am sure there are many things that this package must include. So, feel free to contribute to this repo for I am not so good coder.

# License

Distributed under the `MIT License`.

Copyright @ 2022 Sujan Parajuli
