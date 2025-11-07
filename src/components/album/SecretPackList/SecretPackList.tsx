import type { SecretPack as SecretPackType } from '../../../types/album.types'
import { SecretPack } from '../SecretPack/SecretPack'
import './secret-pack-list.scss'

interface Props {
  data: SecretPackType[]
}

export const SecretPackList = ({ data }: Props) => {
  return (
    <ul className="secret-pack-list">
      {data.map((pack, index) => (
        <SecretPack key={index} index={index} data={pack} />
      ))}
    </ul>
  )
}
