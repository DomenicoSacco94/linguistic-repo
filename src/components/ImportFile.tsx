import React, { useEffect } from 'react';
import { Button, message, Upload, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { beforeUpload } from '../utils/fileUtils';
import { useStore } from '../store/translationStore';

const props: UploadProps = {
  name: 'file',
  accept: '.txt',
  beforeUpload,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: UploadChangeParam) {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const ImportFile: React.FC = () => {
  const setToTranslate = useStore((state) => state.setTotranslate);

  useEffect(() => setToTranslate(null), [setToTranslate]);

  return (
    <div className="inputTextAreaContainer">
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
};
