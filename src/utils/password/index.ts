import * as bcrypt from 'bcrypt';

class PasswordService {
  private ROUNDS = 14;

  public async verify(
    input: string,
    hash: string,
    salt: string,
  ): Promise<boolean> {
    return await bcrypt.compare(input + salt, hash);
  }

  public async generateSalt(): Promise<string> {
    return await bcrypt.genSalt(this.ROUNDS);
  }

  public async generateHash(input: string, salt: string): Promise<string> {
    return await bcrypt.hash(input + salt, this.ROUNDS);
  }
}

export const passwordService = new PasswordService();
