import React from 'react'
import { OptionsKeyType } from './types'

type Props = {
	onChangeOptions: (type: OptionsKeyType, value: boolean) => void
	title: JSX.Element
	value: boolean
	name: string
	typeField: OptionsKeyType
}

const Checkbox = ({
	onChangeOptions,
	title,
	value,
	name,
	typeField,
}: Props) => {
	return (
		<>
			<label className='text-xs'>
				<input
					type='checkbox'
					id={name}
					name={name}
					checked={value}
					onChange={() => onChangeOptions(typeField, !value)}
				/>
				{title}
			</label>
		</>
	)
}

export default Checkbox
