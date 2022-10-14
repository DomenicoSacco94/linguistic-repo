import React, { useEffect } from 'react';
import { Button, Upload, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useStore } from '../store/translationStore';
import { useNavigate } from 'react-router-dom';
import { doBeforeUpload } from '../utils/fileUtils';

export const ImportFile: React.FC = () => {
  const setToTranslate = useStore((state) => state.setTotranslate);
  useEffect(() => setToTranslate(null), [setToTranslate]);

  const navigate = useNavigate();

  const props: UploadProps = {
    name: 'file',
    accept: '.txt',
    beforeUpload: doBeforeUpload(navigate),
    headers: {
      authorization: 'authorization-text',
    },
  };

  return (
    <div className="inputTextAreaContainer">
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Read&Translate</Button>
      </Upload>
    </div>
  );
};
