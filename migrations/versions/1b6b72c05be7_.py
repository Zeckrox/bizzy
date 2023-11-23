"""empty message

Revision ID: 1b6b72c05be7
Revises: 3d9b793894e0
Create Date: 2023-11-23 19:26:44.805455

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1b6b72c05be7'
down_revision = '3d9b793894e0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('subcategory', schema=None) as batch_op:
        batch_op.drop_constraint('subcategory_name_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('subcategory', schema=None) as batch_op:
        batch_op.create_unique_constraint('subcategory_name_key', ['name'])

    # ### end Alembic commands ###
