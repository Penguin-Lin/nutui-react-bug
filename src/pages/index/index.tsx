import { Input } from "@nutui/nutui-react-taro";
import CountDownButton from "./CountDown";

const Page = () => {
  return (
    <div>
      测试
      <Input
        slotButton={
          <CountDownButton
            mobile="4273942983472937"
            getSmsCode={async () => {}}
          />
        }
      ></Input>
      ;
    </div>
  );
};

export default Page;
