"use client";
import { FormattedPost } from '@/app/types';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

type Props = {
  post: FormattedPost;
}

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>('');
  return (
    <div className='prose w-full max-w-full mb-10'>
      {/* Breadcrumbs */}
      <h5 className='text-wh-300 '>{`Home > ${post.category} > ${post.title}`}</h5>
      {/* Category and Edit */}
      <div className='flex justify-between items-center'>
        <h4 className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>{post.category}</h4>
        <div className='mt-4'>
          {isEditable ? (
            <div className='flex justify-between items-center gap-3'>
              <button onClick={() => console.log('cancel edit')}>
                <XMarkIcon className='h-6 w-6 text-accent-red' />
              </button>
            </div>
          ) : (
            <button onClick={() => console.log('make edit')}>
              <PencilSquareIcon className='h-6 w-6 text-accent-red' />
            </button>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Content