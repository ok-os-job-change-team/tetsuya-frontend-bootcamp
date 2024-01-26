import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力してください:', (line) => {
  // 文字列が入力されるとここが実行される
  console.log(`${line} が実行されました`);
  const result = line + 1000;
  console.log(result);
  rl.close();
});