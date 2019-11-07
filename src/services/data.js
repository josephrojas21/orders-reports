class DataReports{
    static async getData(){
        try {     
            const response = await fetch('http://localhost:3000/reports');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
           
            return json;
        } catch (error) {
            console.log('Error: ', error);
        }
    }
}

export default DataReports;