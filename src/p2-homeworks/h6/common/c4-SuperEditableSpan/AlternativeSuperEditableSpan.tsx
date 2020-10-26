import React, {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes, useState} from 'react';
import s from './SuperEdutableSpan.module.css'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

type AlternativeSuperEditableSpanPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
  contentEditable?: boolean

  spanProps?: DefaultSpanPropsType // пропсы для спана
}

const AlternativeSuperEditableSpan: React.FC<AlternativeSuperEditableSpanPropsType> = (
  {autoFocus,
    spanProps,

    ...restProps
}) => {
  const {children, ...restSpanProps} = spanProps || {};

  const spanClassName = `${s.editableSpan} ${restProps.className}`;
  return (
    <>
      {restProps.contentEditable
        ? (
          <SuperInputText
            autoFocus // пропсу с булевым значением не обязательно указывать true

            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
          />
        ) : (
          <span
            className={spanClassName}

            {...restSpanProps}
          >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
            {children || restProps.value}
                    </span>
        )
      }
    </>
  );
}

export default AlternativeSuperEditableSpan;
