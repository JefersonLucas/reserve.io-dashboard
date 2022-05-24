import React, { FormEvent, useState } from "react";

import Input from "components/Input";
import Textarea from "components/Textarea";
import Button from "components/Button";
import SelectInput from "components/SelectInput";

import { status } from "mocks";
import { minDate } from "utils/minDate";

import useForm from "hooks/useForm";
import useLocalStorage from "hooks/useLocalStorage";

import useAuthContext from "hooks/useAuthContext";

import { POST_RESERVATION_REGISTER } from "api";

import { Form, Error } from "./styles";

const RegisterReservationForm: React.FC = () => {
  const requester = useForm("none");
  const equipment = useForm("none");
  const date = useForm("none");
  const entry = useForm("none");
  const exit = useForm("none");
  const place = useForm("none");
  const [statusValue, setStatusValue] = useState("waiting");
  const [observation, setObservation] = useState("");

  const { logout } = useAuthContext();

  const token = useLocalStorage.get("token");

  async function handleRegisterForm(event: FormEvent) {
    event.preventDefault();

    if (!token) {
      logout();
      window.location.href = "/";
      return null;
    }

    const { url, options } = POST_RESERVATION_REGISTER(
      {
        requester: requester.value,
        equipment: equipment.value,
        date: date.value,
        entry_time: entry.value,
        exit_time: exit.value,
        place: place.value,
        status: statusValue,
        observation: observation,
      },
      token,
    );

    await fetch(url, options);
    document.location.reload();
  }

  return (
    <Form onSubmit={handleRegisterForm}>
      {requester.error ? (
        <Error className="errorR">{requester.error}</Error>
      ) : (
        <Error className="errorR"> </Error>
      )}

      <Input
        type="text"
        placeholder="Solicitante"
        required
        className="requester"
        id={requester.value}
        value={requester.value}
        onChange={requester.onChange}
        onBlur={requester.onBlur}
      />

      {equipment.error ? (
        <Error className="errorE">{equipment.error}</Error>
      ) : (
        <Error className="errorE"> </Error>
      )}

      <Input
        type="text"
        placeholder="Equipamento"
        required
        className="equipment"
        value={equipment.value}
        onChange={equipment.onChange}
        onBlur={equipment.onBlur}
      />

      {date.error ? (
        <Error className="errorD">{date.error}</Error>
      ) : (
        <Error className="errorD"> </Error>
      )}

      <Input
        type="date"
        placeholder="Data"
        required
        className="date"
        min={minDate(7)}
        value={date.value}
        onChange={date.onChange}
        onBlur={date.onBlur}
      />

      {entry.error ? (
        <Error className="errorT1">{entry.error}</Error>
      ) : (
        <Error className="errorT1"> </Error>
      )}

      {exit.error ? (
        <Error className="errorT2">{exit.error}</Error>
      ) : (
        <Error className="errorT2"> </Error>
      )}

      {place.error ? (
        <Error className="errorL">{place.error}</Error>
      ) : (
        <Error className="errorL"> </Error>
      )}

      <Input
        type="time"
        placeholder="Entrada"
        required
        className="entry"
        value={entry.value}
        onChange={entry.onChange}
        onBlur={entry.onBlur}
      />

      <Error className="errorS"></Error>

      <Input
        type="time"
        placeholder="Saída"
        required
        className="exit"
        value={exit.value}
        onChange={exit.onChange}
        onBlur={exit.onBlur}
      />

      <Input
        type="text"
        placeholder="Local"
        required
        className="place"
        value={place.value}
        onChange={place.onChange}
        onBlur={place.onBlur}
      />

      <SelectInput
        options={status}
        className="status"
        value={statusValue}
        onChange={({ target }) => setStatusValue(target.value)}
      />

      <Textarea
        placeholder="Observações"
        rows={5}
        className="observations"
        value={observation}
        onChange={({ target }) => setObservation(target.value)}
      />

      <Button type="submit" className="confirm">
        Cadastrar
      </Button>
    </Form>
  );
};

export default RegisterReservationForm;
