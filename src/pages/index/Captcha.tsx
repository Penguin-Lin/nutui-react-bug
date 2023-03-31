import { Dialog } from "@nutui/nutui-react-taro";
import { Input } from "@nutui/nutui-react-taro";
// import { Input } from "@tarojs/components";
import { FC, useState } from "react";

type CaptchaProp = {
  visible: boolean;
  setVisible: Function;
  mobile: string;
  onSuccess: Function;
};

const Captcha: FC<CaptchaProp> = ({ visible, setVisible }) => {
  const [value, setValue] = useState("");

  const handleOk = async () => {};

  return (
    <Dialog
      title="请输入图形验证码"
      okText="确定"
      visible={visible}
      onOk={() => {
        handleOk();
      }}
      onCancel={() => setVisible(false)}
    >
      <Input
        placeholder="请输入图形验证码"
        defaultValue={value}
        onChange={(value) => setValue(value)}
        onBlur={(_, e) => {
          console.log("shijioa");
        }}
      ></Input>
    </Dialog>
  );
};

export default Captcha;
