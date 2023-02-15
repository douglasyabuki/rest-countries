// Props destructuring
interface Props {
    fieldTitle: string,
    fieldContent: string | string[] | number
}

export default function CardInfoField ({fieldTitle, fieldContent}: Props) {
  return (
    <div className="flex w-auto">
      <h3 className="text-md font-semibold">{fieldTitle}</h3>
      <p>{fieldContent}</p>
    </div>
  );
}
