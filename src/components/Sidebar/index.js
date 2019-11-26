import React from 'react';
import { connect } from 'react-redux';
import * as CourseActions from '../../store/actions/course';
import { bindActionCreators } from 'redux';

const Sidebar = ({ modules, toggleLesson }) => (
	<aside>
		{modules.map(mod => (
			<div key={mod.id}>
				<strong>{mod.title}</strong>
				<ul>
					{mod.lessons.map(lesson => (
						<li key={lesson.id}>{lesson.title}
							<button onClick={() => toggleLesson(mod, lesson)}>Selecionar</button>
						</li>
					))}
				</ul>
			</div>
		))}
	</aside>
);

const mapStateToProps = state => ({
	modules: state.course.modules
});

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
