import { TurboModuleRegistry } from 'react-native';

type NativeLoggerType = {
  log: (message: string) => void;
};

const NativeLogger = TurboModuleRegistry.get<NativeLoggerType>('NativeLogger');
export default NativeLogger;
