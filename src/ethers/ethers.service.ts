import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class EthersService {
  private readonly provider: ethers.Provider;
  constructor(provider: ethers.Provider) {
    this.provider = provider;
  }
  getProvider() {
    return this.provider;
  }
}
