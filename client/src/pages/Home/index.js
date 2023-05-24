import { Container, Row, Col } from "react-bootstrap";
import BookItem from "../../components/Shop/BookItem";
import bookApi from "../../api/bookApi";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Loading from "../../components/Loading";
import BookOrigin from "../../components/Shop/BookItem/BookOrigin";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await bookApi.getAll({ page: 1, limit: 6 });
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" h-full pt-20 xs:pt-24 s:pt-24 lg:px-20 pb-10 w-full s:px-4">
      <div className="">
        <div className={styles.booksList}>
          <div className={styles.title}>
            <h2 className={styles.titleHeading}>Origin card</h2>
          </div>
          <Row className={styles.row}>
            {/* card origin  */}
            {books && books.length > 0 ? (
              books.map((book) => (
                <Col xl={2} xs={8} lg={3} sm={6} key={book._id}>
                  <BookOrigin data={book} />
                </Col>
              ))
            ) : (
              <Loading />
            )}
          </Row>
          <div className="pt-10">
            <div className={styles.title}>
              <h2 className={styles.titleHeading}>Latest product</h2>
            </div>
            <Row className={styles.row}>
              {books && books.length > 0 ? (
                books.map((book) => (
                  <Col xl={2} xs={8} lg={3} sm={6} key={book._id}>
                    <BookItem data={book} />
                  </Col>
                ))
              ) : (
                <Loading />
              )}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
