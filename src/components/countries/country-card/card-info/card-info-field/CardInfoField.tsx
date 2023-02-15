// Props destructuring
interface Props {
    fieldTitle: string,
    fieldContent: string | string[] | number
}

// Card Information Field main function
export default function CardInfoField ({fieldTitle, fieldContent}: Props) {

  // Returns a single information field with its title and content to CardInfo.tsx
  return (
    <div className="flex w-auto">
      <h3 className="text-md font-semibold">{fieldTitle}</h3>
      <p>{fieldContent}</p>
    </div>
  );
}
