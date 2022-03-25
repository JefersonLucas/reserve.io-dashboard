import React from "react";

import Modal from "components/Modal";
import useModal from "hooks/useModal";

import { MdModeEdit, MdDelete } from "react-icons/md";

import formatDate from "helpers/formatDate";

import * as S from "./styles";

import { ReservationListProps } from "./types";

const ReservationList: React.FC<ReservationListProps> = ({
  id,
  status,
  requester,
  date,
  place,
  entry_time,
  exit_time,
}) => {
  const { isModalOpen: isModalEditOpen, toggleModal: toggleModalEdit } =
    useModal();
  const { isModalOpen: isModalDeleteOpen, toggleModal: toggleModalDelete } =
    useModal();

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
        {place}
      </Modal>

      <Modal
        isOpen={isModalDeleteOpen}
        onClose={toggleModalDelete}
        title="Deletar Reserva?"
      >
        {place} - {id}
      </Modal>
    </>
  );
};

export default ReservationList;
