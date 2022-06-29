import {RcFile} from "antd/lib/upload";

export const beforeUpload = (file: RcFile) => {
    const reader = new FileReader();

    reader.onload = e => {
        console.log(e.target?.result);
        e.target?.result && localStorage.setItem('text-to-translate', e.target?.result.toString())
    };
    reader.readAsText(file);
    // Prevent upload
    return false;
}