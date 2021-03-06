import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import moment from 'moment';
import { calcAge } from '../../utils';

function RegisDetailModal({ isOpen, hideModal, regisData }) {
  return (
    <Modal
      show={isOpen}
      onHide={hideModal}
      size="lg"
      style={{ top: '50px', zIndex: '1500' }}
    >
      <Modal.Header closeButton>ประวัติผู้ป่วย</Modal.Header>
      <Modal.Body>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th style={{ width: '15%' }}>AN</th>
              <td style={{ width: '35%' }}>{regisData?.an || ''}</td>
              <th style={{ width: '15%' }}>HN</th>
              <td>{regisData?.hn}</td>
            </tr>
            <tr>
              <th>ชื่อ-สกุล</th>
              <td>{regisData?.patient?.name}</td>
              <th>อายุ (ปี)</th>
              <td>
                {calcAge(regisData?.patient?.birthdate) || ''}
              </td>
            </tr>
            <tr>
              <th>วันที่ Admit</th>
              <td>
                {moment(regisData?.reg_date).format('DD/MM/YYYY')}
              </td>
              <th>วอร์ด</th>
              <td>{regisData?.ward?.ward_name}</td>
            </tr>
            <tr>
              <th>วันที่ส่ง Lab</th>
              <td>
                {regisData?.lab_date ? moment(regisData?.lab_date).format('DD/MM/YYYY') : 'ยังไม่ลงผล Lab'}
              </td>
              <th>ผล Lab</th>
              <td>
                {regisData?.lab_result ? regisData?.lab_result === '1' ? 'Positive' : 'Negative' : 'ยังไม่ลงผล Lab'}
              </td>
            </tr>
            <tr>
              <th>อาการ</th>
              <td>{regisData?.symptom}</td>
              <th>Diag</th>
              <td>{regisData?.dx}</td>
            </tr>
          </tbody>
        </table>

        {regisData?.remark && (
          <div className="alert alert-success" role="alert">
            <h5>NOTE :</h5>
            <span>{regisData?.remark}</span>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

RegisDetailModal.propTypes = {
  isOpen: PropTypes.bool,
  hideModal: PropTypes.func,
  onSelected: PropTypes.func,
};

export default RegisDetailModal;
