import S from '@sanity/desk-tool/structure-builder'
import { MdPerson } from "react-icons/md";
import { MdEvent as MdEventNote } from "react-icons/md";
import { MdGavel } from "react-icons/md";
import { MdInfoOutline as MdInfo } from "react-icons/md";


export default () =>
S.list()
    .title('Content')
    .items([
        ...S.documentTypeListItems()
    ])