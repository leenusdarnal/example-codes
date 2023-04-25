import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

const YouTubeForm = () => {
  const form = useForm()
  const { register, control } = form

  return (
    <div>
      <form>
        <label htmlFor='username'>username</label>
        <input type='text' id='username' {...register('username')} />

        <label htmlFor='email'>Email</label>
        <input type='text' id='email' {...register('email')} />

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' {...register('channel')} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default YouTubeForm
