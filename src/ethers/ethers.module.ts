import { DynamicModule, Module } from '@nestjs/common';
import { ethers } from 'ethers';
import { EthersService } from './ethers.service';

@Module({
  providers: [EthersService],
  exports: [EthersService],
})
export class EthersModule {
  static forFeature(provider: ethers.Provider): DynamicModule {
    return {
      module: EthersModule,
      providers: [
        {
          provide: EthersService,
          useFactory: () => new EthersService(provider),
        },
      ],
    };
  }
}
