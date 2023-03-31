import { Button } from "@nutui/nutui-react-taro";
import Captcha from "./Captcha";

import { useState } from "react";

type CountDownButtonProp = {
  mobile: string;
  getSmsCode: () => Promise<void>;
};

export default function ({ mobile, getSmsCode }: CountDownButtonProp) {
  const [captchaVisible, setCaptchaVisible] = useState(false);

  console.log("render");

  return (
    <>
      <div className="flex items-center h-full">
        <Button
          size="small"
          type="info"
          onClick={async (e) => {
            setCaptchaVisible(true);
            // console.log('什么都没调用')
            // e.stopPropagation()
          }}
        >
          获取验证码
        </Button>
      </div>

      <Captcha
        visible={captchaVisible}
        setVisible={setCaptchaVisible}
        mobile={mobile}
        onSuccess={() => {
          setCaptchaVisible(false);
        }}
      />
    </>
  );
}
