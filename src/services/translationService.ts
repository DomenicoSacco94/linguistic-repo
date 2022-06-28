import {getTranslationUrl} from "../utils/translationUrl";
import axios from "axios";


export const translateString = async (toTranslate: string): Promise<string> => {
    return await axios.get(getTranslationUrl('de', 'en', toTranslate)).then(resp => {
        return resp.data[0][0][0];
    });
}