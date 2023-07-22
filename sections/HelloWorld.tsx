export interface HelloWorldProps {
  text?: string;
}

export default function HelloWorld({
  text = "Hello World",
}: HelloWorldProps) {
  return (
    <div class="w-full flex">
      {text}
    </div>
  );
}
