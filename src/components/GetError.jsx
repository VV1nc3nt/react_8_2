import useFetchJson from '../hooks/useFetchJson'

export default function GetError() {
  const [{ data, pending, error }] = useFetchJson('http://localhost:7070/error');

  return (
    <div className='box'>
      <h2>Response (error)</h2>
      <p>Data: { data?.status }</p>
      <p>Pending: { `${ pending }` }</p>
      <p>{ `${ error }` }</p>
    </div>
  )
}
