import {
  Button,
  CalendarDate,
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Spacer,
} from '@nextui-org/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { eventSources, getEventById } from 'entities/event';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerParticipantSchema } from '../model';
import {
  RegisterParticipantData,
  registerParticipant,
} from 'entities/participant';
import dayjs from 'dayjs';

export const RegisterPage = () => {
  const { eventId } = useParams();
  const { data: event, isLoading } = getEventById(eventId!);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState<CalendarDate>();

  const { reset, register, handleSubmit } = useForm<RegisterParticipantData>({
    resolver: zodResolver(registerParticipantSchema),
  });

  const onSubmit = (data: RegisterParticipantData) => {
    registerParticipant(eventId!, {
      email,
      fullName,
      source: data.source,
      birthDate: dayjs(birthDate!.toString()).toISOString(),
    });

    reset();
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-neutral-500">Event registration</div>
          <div className="text-3xl font-bold text-white">{event?.title}</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            {...register('fullName')}
            isRequired
            type="text"
            label="Full name"
            labelPlacement="outside"
            placeholder=" "
            className="md:max-w-xs"
            value={fullName}
            onValueChange={setFullName}
          />
          <Input
            {...register('email')}
            isRequired
            type="email"
            label="Email"
            labelPlacement="outside"
            placeholder=" "
            className="md:max-w-xs"
            value={email}
            onValueChange={setEmail}
          />
          <DatePicker
            {...register('birthDate')}
            isRequired
            label="Date of birth"
            labelPlacement="outside"
            className="md:max-w-xs"
            value={birthDate}
            onChange={setBirthDate}
          />
          <Spacer y={1} />
          <RadioGroup
            isRequired
            {...register('source')}
            label="Where did you hear about this event?"
            defaultValue={eventSources[0]}
            classNames={{
              base: 'gap-4',
              label: 'text-neutral-500',
              wrapper: 'gap-4',
            }}
          >
            {eventSources.map(s => (
              <Radio value={s} classNames={{ label: 'text-white' }}>
                {s}
              </Radio>
            ))}
          </RadioGroup>
          <Spacer y={1} />
          <Button type="submit" color="primary" className="md:max-w-xs">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};
