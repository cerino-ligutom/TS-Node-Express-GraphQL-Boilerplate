import * as bcrypt from 'bcrypt';

const ROUNDS = 14;

export const verify = async (input: string, hash: string, salt: string): Promise<boolean> => {
  return await bcrypt.compare(input + salt, hash);
};

export const generateSalt = async (): Promise<string> => {
  return await bcrypt.genSalt(ROUNDS);
};

export const generateHash = async (input: string, salt: string): Promise<string> => {
  return await bcrypt.hash(input + salt, ROUNDS);
};
