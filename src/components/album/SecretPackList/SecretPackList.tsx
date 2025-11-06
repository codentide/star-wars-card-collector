import type { SecretPack as SecretPackType } from '../../../types/album.type'
import { SecretPack } from '../SecretPack/SecretPack'

interface Props {
  data: SecretPackType[]
}

export const SecretPackList = ({ data }: Props) => {
  return (
    <ul>
      {data.map((pack, index) => (
        <SecretPack key={index} data={pack} />
      ))}
    </ul>
  )
}
