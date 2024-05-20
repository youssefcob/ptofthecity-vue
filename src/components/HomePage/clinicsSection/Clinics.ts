interface ClinicLocations {
    name: string,
    numberOfClinics: number,
    clinics: Object
}

const clinicLocations = [
    {
        name: 'Manhattan',
        numberOfClinics: 5,
        clinics: {

        }
    },
    {
        name: 'Brooklyn',
        numberOfClinics: 10,
        clinics: {

        }
    },
    {
        name: 'Bronx',
        numberOfClinics: 5,
        clinics: {

        }
    },
    {
        name: 'Queens',
        numberOfClinics: 2,
        clinics: {

        }
    }

] as ClinicLocations[];


export type { ClinicLocations };
export { clinicLocations };

