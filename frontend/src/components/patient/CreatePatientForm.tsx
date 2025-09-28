import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import * as patientService from '@/services/patient';
import * as departmentService from '@/services/department';

type PatientForm = {
  dni: string;
  fullname: string;
  phoneNumber: string;
  birthDate?: string;
  gender: 'MASCULINO' | 'FEMENINO' | '';
  address: string;
  municipalityId: number;
};

type Department = {
  id: number;
  name: string;
  municipalities?: Array<{
    id: number;
    name: string;
  }>
}

const initialValues: PatientForm = {
  dni: '',
  fullname: '',
  phoneNumber: '',
  birthDate: undefined,
  gender: '',
  address: '',
  municipalityId: -1,
}

export function CreatePatientForm() {
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState<Array<Department>>([]);
  const [selectedDepartmentIdx, setSelectedDepartmentIdx] = useState<number | null>(null);

  const [patientData, setPatientData] = useState<PatientForm>(initialValues);

  const validateFields = () => {
    if (!patientData.dni || !patientData.fullname || !patientData.gender || !patientData.address || (!patientData.municipalityId || patientData.municipalityId === -1)) {
      toast.error('Por favor completa los campos obligatorios (género, dirección y municipio)');
      return;
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target as HTMLInputElement;
    const name = target.name as keyof PatientForm;
    const value = target.value;

    if (name === 'municipalityId') {
      setPatientData((patient) => ({ ...patient, municipalityId: Number(value) }));
      return;
    }

    if (name === 'gender') {
      setPatientData((s) => ({ ...s, gender: value as 'MASCULINO' | 'FEMENINO' | '' }));
      return;
    }

    setPatientData((s) => ({ ...s, [name]: value } as unknown as PatientForm));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Basic validation - ensure required fields (match backend CreatePatientDto)
    validateFields();

    setLoading(true);

    try {
      const res = await patientService.create(patientData);

      console.log(res);
      toast.success('Paciente creado correctamente');

      setPatientData(initialValues);

    } catch (error: unknown) {
      console.error(error);
      toast.error('Error al crear paciente');
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    departmentService
      .getAll()
      .then(
        (data) => setDepartments(data || [])
      ).catch(
        (e) => {
          console.warn(e)
          toast.error('No se han podido cargar los departamentos')
        }
      )
  }, []);

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Cédula"
          name="dni"
          value={patientData.dni}
          onChange={handleChange}
          fullWidth
          required
        />
      </div>
      <div>
        <TextField
          label="Nombre completo"
          name="fullname"
          value={patientData.fullname}
          onChange={handleChange}
          fullWidth
          required
        />
      </div>
      <div>
        <TextField
          label="Teléfono"
          name="phoneNumber"
          value={patientData.phoneNumber}
          onChange={handleChange}
          fullWidth
        />
      </div>
      <div>
        <TextField
          select
          label="Género"
          name="gender"
          value={patientData.gender}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="MASCULINO">Masculino</MenuItem>
          <MenuItem value="FEMENINO">Femenino</MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          label="Dirección"
          name="address"
          value={patientData.address}
          onChange={handleChange}
          fullWidth
          required
        />
      </div>
      <div>
        <TextField
          select
          label="Departamento"
          name="departmentId"
          value={selectedDepartmentIdx !== null ? String(selectedDepartmentIdx) : ''}
          onChange={(e) => {
            const idx = Number(e.target.value);
            setSelectedDepartmentIdx(Number.isNaN(idx) ? null : idx);
            // reset municipality when department changes
            setPatientData((s) => ({ ...s, municipalityId: -1 }));
          }}
          fullWidth
        >
          {departments.length === 0 ? (
            <MenuItem value="">No hay departamentos</MenuItem>
          ) : (
            departments.map((d, idx) => (
              <MenuItem key={d.id} value={String(idx)}>
                {d.name}
              </MenuItem>
            ))
          )}
        </TextField>
      </div>

      <div>
        <TextField
          select
          label="Municipio"
          name="municipalityId"
          value={patientData.municipalityId === -1 ? '' : patientData.municipalityId}
          onChange={handleChange}
          fullWidth
          required
        >
          {departments.length === 0 ? (
            <MenuItem value="">No hay municipios</MenuItem>
          ) : (
            // find selected department's municipalities
            (() => {
              // determine municipalities to show: if a department is selected show its municipalities, otherwise show all
              const items = selectedDepartmentIdx !== null
                ? (departments[selectedDepartmentIdx]?.municipalities ?? [])
                : departments.flatMap(d => d.municipalities ?? []);
              return items.map((m) => (
                <MenuItem key={m.id} value={m.id}>
                  {m.name}
                </MenuItem>
              ));
            })()
          )}
        </TextField>
      </div>
      <div>
        <TextField
          label="Fecha de nacimiento"
          name="birthDate"
          value={patientData.birthDate ?? ''}
          onChange={handleChange}
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
          {loading ? 'Enviando...' : 'Registrarse'}
        </Button>
      </div>
    </form>
  );
}
