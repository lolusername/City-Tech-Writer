export default {
  name: 'tags',
  title: 'Tags',
  type: 'array',
  of: [
    {
      type: 'string'
    }
  ],
  //   "Mathematics," "Stage Writing," "In Translation," "History," "Career Development," and "Short Films."
  options: {
    list: [
      { title: 'Personal narratives', value: 'personal_narratives' },
      { title: 'Fiction', value: 'fiction' },
      { title: 'literary analysis', value: 'literary_analysis' },
      { title: 'Art and architectural criticism ', value: 'art_crit' },
      { title: 'Philosophy ', value: 'philosophy' },
      { title: 'Reflections On Healthcare ', value: 'reflections_healthcare' },
      { title: 'Technology: Past, Present, Future', value: 'tech' },
      { title: 'Sociological Inquiry', value: 'soc' },
      { title: 'Science and Biology', value: 'sci_bi' },
      { title: 'Photography', value: 'photo' },
      { title: 'poetry', value: 'poetry' },
      { title: 'Mathematics', value: 'math' },
      { title: 'Stage Writing', value: 'stage_writing' },
      { title: 'In Translation', value: 'in_translation' },
      { title: 'History', value: 'history' },
      { title: 'Career Development', value: 'career_dev' },
      { title: 'Short Films', value: 'short_films' },
      { title: 'Fashion', value: 'fashion' }
    ]
  }
}
