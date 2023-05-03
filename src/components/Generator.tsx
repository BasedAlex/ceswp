import { useState } from 'react'
import copyS from '../images/copy.svg'
import Image from 'next/image'
import { generatorPassword } from './utils'
import { intialOptions } from './constants'
import { OptionsKeyType, OptionsType } from './types'
import Checkbox from './Checkbox'

const Generator = () => {
	const [pass, setPass] = useState('Нажмите обновить')
	const [options, setOptions] = useState<OptionsType>(intialOptions)

	const onChangeOptions = (
		typeField: OptionsKeyType,
		value: number | boolean
	) => {
		setOptions({ ...options, [typeField]: value })
	}

	const handleGenerate = () => {
		setPass(generatorPassword(options))
	}

	return (
		<div className='flex-col '>
			<h3 className='font-bold text-5xl '>Генератор случайных паролей</h3>
			<span className='text-lg flex align-center max-w-2xl mt-2 ml-4'>
				Создайте безопасный и надёжный пароль для любого вашего аккаунта.
			</span>
			<p className='text-lg font-bold  m-0 max-w-2xl mb-2 ml-4'>
				Все сгенерированные пароли сохраняются локально и не отправляются на
				сервер.
			</p>
			<div className='flex-col gap-4 mx-20'>
				<input
					className='mx-4 text-xl bg-gray-300 border-l rounded-sm pl-2 w-68'
					value={pass.length ? pass : 'Параметры не заданы!'}
					disabled={true}
				/>{' '}
				<button
					onClick={() => {
						navigator.clipboard.writeText(pass)
					}}
				>
					<Image
						src={copyS}
						alt='copy'
						className={'mt-2 fill-white'}
						style={{ width: '16px', height: '15px' }}
					/>
				</button>
				<button
					className='bg-cyan-600 rounded-xl px-5 mx-4 text-white '
					onClick={handleGenerate}
				>
					Обновить
				</button>
			</div>
			<div className='flex my-5 justify-between'>
				<div className='w-70 '>
					<h4 className='font-bold text-lg'>Типы символов</h4>
					<div className='grid grid-cols-2 grid-rows-2	gap-1'>
						<Checkbox
							title={
								<>
									{' '}
									A-Z <br />
									(Прописные буквы)
								</>
							}
							typeField='upperAbc'
							name='uppercase'
							onChangeOptions={onChangeOptions}
							value={options.upperAbc}
						/>
						<Checkbox
							title={
								<>
									{' '}
									a-z
									<br />
									(Строчные буквы)
								</>
							}
							typeField='abc'
							name='lowercase'
							onChangeOptions={onChangeOptions}
							value={options.abc}
						/>
						<Checkbox
							title={<> 0-9</>}
							typeField='numeric'
							name='numbers'
							onChangeOptions={onChangeOptions}
							value={options.numeric}
						/>
						<Checkbox
							title={<> Символы</>}
							typeField='symbols'
							name='symbols'
							onChangeOptions={onChangeOptions}
							value={options.symbols}
						/>
					</div>
				</div>
				<div className='w-80'>
					<h4 className='font-bold text-lg'>Длина пароля</h4>
					<label className='text-lg'>
						<input
							type='range'
							id='length'
							name='length'
							min='6'
							max='20'
							value={options.len}
							onChange={(e: React.FormEvent<HTMLInputElement>) =>
								onChangeOptions('len', Number(e.currentTarget.value))
							}
						/>{' '}
						{options.len}
					</label>
				</div>
			</div>
		</div>
	)
}

export default Generator
