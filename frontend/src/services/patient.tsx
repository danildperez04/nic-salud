import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL + '/patients';

//TODO: Extract types (duplicate types)
interface PatientData {
  dni: string;
  fullname: string;
  phoneNumber: string;
  birthDate?: string;
  gender: 'MASCULINO' | 'FEMENINO' | '';
  address: string;
  municipalityId: number;
}

type UpdatePatientData = { id: number } & PatientData;

async function getOne(id: number) {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data;
}

async function getAll() {
  const response = await axios.get(API_URL);

  return response.data;
}

async function create(patientData: PatientData) {

  const token = localStorage.getItem('token') || undefined;

  const payload = {
    dni: patientData.dni,
    fullname: patientData.fullname,
    phoneNumber: patientData.phoneNumber,
    birthDate: patientData.birthDate,
    gender: patientData.gender,
    address: patientData.address,
    municipalityId: patientData.municipalityId,
  };

  const res = await axios.post(API_URL, payload, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return res;
}

async function update(id: number, patientData: UpdatePatientData) {
  const response = await axios.put(`${API_URL}/${id}`, patientData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.data;
}

export {
  getOne,
  getAll,
  create,
  update
}