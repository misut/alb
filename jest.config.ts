import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest', // TypeScript 지원을 위한 Jest 프리셋
  testEnvironment: 'node', // Node.js 환경에서 실행
  clearMocks: true, // 각 테스트 실행 후 mock 초기화
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // 지원하는 파일 확장자
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // TypeScript 파일을 Jest에서 변환
  },
};

export default config;
