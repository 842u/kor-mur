import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  pixelBasedPreset,
  Tailwind,
  Text,
} from '@react-email/components';

export default function ContactEmail({ email, message, name, phone }) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-10 max-w-116.25 rounded border border-solid border-[#eaeaea] p-5">
            <Heading className="mx-0 my-7.5 p-0 text-center text-[24px] font-normal text-black">
              <strong>{name}</strong> on <strong>{'murawska.842u.dev'}</strong> wants to contact
              with you!
            </Heading>
            <Text className="text-[14px] leading-6 text-black">{message}</Text>
            <Text className="text-[14px] leading-6 text-black">{email}</Text>
            <Text className="text-[14px] leading-6 text-black">{phone}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ContactEmail.PreviewProps = {
  name: 'Test Name',
  email: 'test.name@example.com',
  message: 'Hello, I would like to get in touch with you.',
};
