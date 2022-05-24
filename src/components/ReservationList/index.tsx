import React from "react";

import Modal from "components/Modal";
import useModal from "hooks/useModal";

import { MdModeEdit, MdDelete } from "react-icons/md";

import formatDate from "helpers/formatDate";

import * as S from "./styles";

import { ReservationListProps } from "./types";
import Button from "components/Button";
import useLocalStorage from "hooks/useLocalStorage";
import useAuthContext from "hooks/useAuthContext";
import { DELETE_RESERVATION } from "api";
import UpdateReservationForm from "components/Forms/UpdateReservationForm";

const ReservationList: React.FC<ReservationListProps> = ({
  id,
  status,
  requester,
  date,
  place,
  entry_time,
  exit_time,
}) => {
  const { logout } = useAuthContext();

  const { isModalOpen: isModalEditOpen, toggleModal: toggleModalEdit } =
    useModal();
  const { isModalOpen: isModalDeleteOpen, toggleModal: toggleModalDelete } =
    useModal();

  const token = useLocalStorage.get("token");

  async function handleDeleteReservation() {
    if (!token) {
      logout();
      window.location.href = "/";
      return null;
    }

    const { url, options } = DELETE_RESERVATION(id, token);

    await fetch(url, options);
    toggleModalDelete();
    document.location.reload();
  }

  return (
    <>
      <S.Container id={id}>
        <S.Tag status={status} />
        <S.Header>
          <S.Title>
            {requester} | {place}
          </S.Title>
          <S.Subtitle>
            {formatDate(date)} - {entry_time} às {exit_time}
          </S.Subtitle>
        </S.Header>
        <S.Controls>
          <S.Edit onClick={toggleModalEdit} title="Editar reserva">
            <MdModeEdit />
          </S.Edit>
          <S.Delete onClick={toggleModalDelete} title="Deletar reserva">
            <MdDelete />
          </S.Delete>
        </S.Controls>
      </S.Container>

      <Modal
        isOpen={isModalEditOpen}
        onClose={toggleModalEdit}
        title="Editar Reserva?"
      >
        <S.ModalContent>
          {id && <UpdateReservationForm id={id} />}
        </S.ModalContent>
      </Modal>

      <Modal
        isOpen={isModalDeleteOpen}
        onClose={toggleModalDelete}
        title="Excluir reserva"
      >
        <S.ModalContent>
          Deletar reserva de <strong>{requester}</strong>?
        </S.ModalContent>
        <S.ModalFooter>
          <Button type="button" className="cancel" onClick={toggleModalDelete}>
            Cancelar
          </Button>
          <Button
            type="reset"
            className="confirm"
            onClick={handleDeleteReservation}
          >
            Confirmar
          </Button>
        </S.ModalFooter>
      </Modal>
    </>
  );
};

export default ReservationList;
