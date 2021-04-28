import React from 'react';
import { toast } from 'react-toastify';
import FormWard from '../Form';
import api from '../../../api';

const NewBed = () => {
  const handleSubmit = async (data) => {
    let res = await api.post('/api/wards', data);

    if (res.data.status === 1) {
      toast.success('บันทึกข้อมูลวอร์ดเรียบร้อยแล้ว !!!', { autoClose: 1000, hideProgressBar: true });
    } else {
      toast.error('พบข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้ !!!', { autoClose: 1000, hideProgressBar: true })
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">เพิ่มข้อมูลวอร์ด</h3>
      </div>
      <div className="card-body">

        <FormWard handleSubmit={handleSubmit} />

      </div>
    </div>
  );
};

export default NewBed
