import useFetchJson from '../hooks/useFetchJson'

export default function GetPending() {
  const [{ data, pending, error }] = useFetchJson('http://localhost:7070/loading');

  return (
    <div className='box'>
      <h2>Response (pending)</h2>
      <p>Data: { data?.status }</p>
      <p>Pending: { `${ pending }` }</p>
      <p>{ `${ error }` }</p>
    </div>
  )
}
