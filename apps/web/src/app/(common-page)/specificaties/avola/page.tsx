import { Container } from '@/components/container';
import { Metadata } from 'next';
import data from './data.json';
import { Fragment } from 'react';
import styles from './styles.module.scss';
import { RemotePage } from '@/components/remote-page';

export default async function Avola() {
  return (
    <>
      <Container component="main">
        <RemotePage page="specificaties/avola" />
        {Object.entries(data).map(([title, table]) => (
          <div className="mb-8 w-full overflow-x-auto" key={title}>
            <h2 className="mb-1 text-xl">{title}</h2>
            <table className={styles.decisionTable}>
              <thead>
                <tr>
                  <th>A</th>
                  {table.head.map((cell, i) => {
                    if (i === 0) return null;

                    return (
                      <th colSpan={2} key={i}>
                        {cell[0]}
                        <span>{cell[1]}</span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {table.body.map((row, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      {row.map((cell, j) => {
                        return (
                          <Fragment key={j}>
                            <td>{cell[0]}</td>
                            <td>{cell[1]}</td>
                          </Fragment>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Regelregister van de Nederlandse Overheid',
};
