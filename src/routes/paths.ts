function path(root: string, sublink: string) {
    return `${root}${sublink}`;
  }

  const ROOTS= '/';

export const PATH_APP = {
    home: ROOTS,
    movies: path(ROOTS, 'movies'),
    categories: path(ROOTS,'categories'),
    tv: path(ROOTS,'tv'),
    sports: path(ROOTS,'sports'),
    my_space: path(ROOTS,'my-space'),
  };