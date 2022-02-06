//@ts-nocheck

import React, { useContext, useState } from "react";
import { Context } from "..";
import {
  makeStyles,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import Page404 from "./ErrorPaged/Page404";
import HeaderCabinet from "../components/HeaderCabinet";
import { useHistory } from "react-router";
import close from "../assets/CartEmpty/close.png";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { toJS } from "mobx";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto Slab",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  titleRowTop: {
    fontSize: 43,
    fontWeight: 900,
    lineHeight: 2.5,
  },
  titleSubRowTop: {
    fontSize: 23,
    fontWeight: 800,
    lineHeight: 2,
  },
  closeRowTop: {
    fontSize: 42,
    fontWeight: 900,
    lineHeight: 2.5,
  },
}));

function AdminPanel() {
  const classes = useStyles();
  const { user, createSection, createLector, createCourse } =
    useContext(Context);
  const [courses, setCourses] = useState({});
  const [course, setCourse] = useState({});
  const [sections, setSections] = useState({});
  const [lectors, setlectors] = useState({});
  const [value, setValue] = useState("Section name to add");
  const [lectorsName, setLectorsName] = useState("Section name to add");
  const history = useHistory();

  useEffect(async () => {
    if (!sections[0]) {
      createSection.getAllSections();
      const datanew = await createSection.getSectionActual();
      setSections(datanew);
    }
    if (!lectors[0]) {
      createLector.getAllLectors();
      const datanew = await createLector.getLectorActual();
      setlectors(datanew);
    }
    if (!courses[0]) {
      createCourse.getAllCourses();
      const datanew = await createCourse.getCourseActual();
      setCourses(datanew);
    }
  }, [createSection.section]);

  if (!user.isAuth) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!user.isAdmin) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  console.log(toJS(courses));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={classes.root}>
        <HeaderCabinet />
        <div>
          <Container fluid="xl">
            <Row>
              <Col xs={11} className={classes.titleRowTop}>
                Your admin board
              </Col>
              <Col xs={1} className={classes.closeRowTop}>
                <Button
                  type="button"
                  varian="outlined"
                  onClick={() => history.goBack()}
                >
                  {" "}
                  <img src={close} alt="" />{" "}
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={classes.titleSubRowTop}>
                  Urban id and section names:
                </div>
                {sections?.map((i) => {
                  return (
                    <div style={{ marginTop: 5 }}>
                      ID: <b>{i.id}</b> NAME: <b>{i.name}</b>
                    </div>
                  );
                })}
                <form style={{ marginTop: 5 }}>
                  <TextField
                    style={{ marginTop: 7, marginRight: 7 }}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <Button
                    style={{ margin: 5 }}
                    variant="contained"
                    onClick={async () => {
                      createSection.addSection({ name: value });
                      createSection.getAllSections();
                    }}
                  >
                    Add
                  </Button>
                </form>
              </Col>
              <Col>
                <div className={classes.titleSubRowTop}>
                  Urban id and lectors names:
                </div>
                {lectors?.map((i) => {
                  return (
                    <div style={{ marginTop: 5 }}>
                      ID: <b>{i.id}</b> NAME: <b>{i.name}</b>
                    </div>
                  );
                })}
                <form style={{ marginTop: 5 }}>
                  <TextField
                    style={{ marginTop: 7, marginRight: 7 }}
                    type="text"
                    value={lectorsName}
                    onChange={(e) => setLectorsName(e.target.value)}
                  />

                  <Button
                    style={{ margin: 5 }}
                    variant="contained"
                    onClick={async () => {
                      createLector.addLector({ name: lectorsName });
                      createLector.getAllLectors();
                    }}
                  >
                    Add
                  </Button>
                </form>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={classes.titleSubRowTop}>
                  Urban id, courses names, lectorsId, sectionId, price:
                </div>
                {courses.rows?.map((i) => {
                  return (
                    <div style={{ marginTop: 5 }}>
                      ID: <b>{i.id}</b> NAME: <b>{i.name}</b> SECTION:
                      <b>{i.sectionId}</b> LECTOR:
                      <b>{i.lectorId}</b>
                    </div>
                  );
                })}
                <form
                  style={{
                    marginTop: 5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    style={{ marginTop: 7, marginRight: 7 }}
                    type="text"
                    value={course.name}
                    onChange={(e) =>
                      setCourse({ ...course, name: e.target.value })
                    }
                  />
                  <FormControl style={{ marginTop: 7, marginRight: 7 }}>
                    <Select
                      labelId="price"
                      id="course-price"
                      value={course.price}
                      label="Price"
                      onChange={(e) => {
                        setCourse({ ...course, price: e.target.value });
                      }}
                    >
                      <MenuItem value={0}>Free</MenuItem>
                      <MenuItem value={50}>50$</MenuItem>
                      <MenuItem value={100}>100$</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl style={{ marginTop: 7, marginRight: 7 }}>
                    <Select
                      labelId="price"
                      id="course-price"
                      value={course.sectionId}
                      label="Price"
                      onChange={(e) => {
                        setCourse({ ...course, sectionId: e.target.value });
                      }}
                    >
                      <MenuItem value={1}>Youth</MenuItem>
                      <MenuItem value={2}>Art-therapy</MenuItem>
                      <MenuItem value={3}>Kids</MenuItem>
                      <MenuItem value={4}>Teens</MenuItem>
                      <MenuItem value={5}>Event-lab</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl style={{ marginTop: 7, marginRight: 7 }}>
                    <Select
                      labelId="price"
                      id="course-price"
                      value={course.lectorId}
                      label="Price"
                      onChange={(e) => {
                        setCourse({ ...course, lectorId: e.target.value });
                      }}
                    >
                      <MenuItem value={1}>Iulia Ubeyvolk</MenuItem>
                      <MenuItem value={2}>Ana Ubeivolc</MenuItem>
                      <MenuItem value={3}>Serghei Procopov</MenuItem>
                      <MenuItem value={4}>Ana Vasiltova</MenuItem>
                      <MenuItem value={5}>Inna Ciriac</MenuItem>
                      <MenuItem value={6}>Olga Voronova</MenuItem>
                      <MenuItem value={7}>Vitalii Grecov</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    style={{ margin: 5 }}
                    variant="contained"
                    onClick={async () => {
                      createCourse.addCourse({
                        name: course.name,
                        price: course.price,
                        sectionId: course.sectionId,
                        lectorId: course.lectorId,
                      });
                      createCourse.getAllCourses();
                    }}
                  >
                    Add
                  </Button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </motion.div>
  );
}

export default observer(AdminPanel);
