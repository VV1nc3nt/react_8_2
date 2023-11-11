import useFetchJson from '../hooks/useFetchJson'

export default function GetData() {
  const [{ data, pending, error }] = useFetchJson('http://localhost:7070/data');

  return (
    <div className='box'>
      <h2>Response (data)</h2>
      <p>Data: { data?.status }</p>
      <p>Pending: { `${ pending }` }</p>
      <p>{ `${ error }` }</p>
    </div>
  )
}
